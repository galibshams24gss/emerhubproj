<template>
<div id="app">
    <div class="flex mb-4">
      <div class="w-1/2 h-100">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">User Data</div>
          <div v-if="state === 'synced'" class="text-green-500 text-base">
            User Data is synced with Firestore
          </div>
          <div v-else-if="state === 'changed'" class="text-orange-500 text-base">
            There is change in data, it will sync with Firestore
          </div>
          <div v-else-if="state === 'error'" class="text-red-600 text-base">
            Sorry, there is an error while storing data in Firestore
          </div>
          <div v-else-if="state === 'loading'" class="text-blue-600 text-base">
            Data Loading...
          </div>
          <div v-else-if="state === 'autosaved'" class="text-teal-600 text-base">
            Autosaved
          </div>
        </div>

  <div v-if="submitted === true" class="fixed z-10 inset-0 overflow-y-auto" id="dialog">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
    
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Data Completion Percentage
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
                You have completed this much percentage
              </p>
              <p class="text-center text-lg leading-6 font-medium text-blue-700">
                {{ calcpoints }}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button type="button" @click="close" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            Close
          </button>
        </span>
      </div>
    </div>
  </div>
</div>

  <form @submit.prevent="saveUser" @input="dataUpdate" ref="form" class="bg-white px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="user_id">
        User ID
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="formdata.user_id" id="username" type="text" placeholder="User ID" required>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Full Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="formdata.name" id="name" type="text" placeholder="Full Name" required>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email Address
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="formdata.email" id="email" type="email" placeholder="Email Address">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="dept">
        Department
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="formdata.dept" id="department" type="text" placeholder="Department">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="position">
        Position
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="formdata.position" id="position" type="text" placeholder="Position">
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Save
      </button>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="backToOriginal" type="submit">
        Revert
      </button>
    </div>
    <div class="flex justify-center">
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
        Cancel
      </a>
    </div>
  </form>
      </div>
      <div class="w-1/2 h-screen">

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Store Data</div>
          <div class="text-blue-500 text-base">
            Firestore data is displayed here
          </div>
        </div>
        <form ref="form" class="bg-white px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="user_id">
        User ID
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="storeData.user_id" id="username" type="text" placeholder="User ID" required>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Full Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="storeData.name" id="name" type="text" placeholder="Full Name" required>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email Address
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="storeData.email" id="email" type="email" placeholder="Email Address">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="dept">
        Department
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="storeData.dept" id="department" type="text" placeholder="Department">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="position">
        Position
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="storeData.position" id="position" type="text" placeholder="Position">
    </div>
  </form>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { db } from '../firebase';
import { debounce } from 'debounce';
const docPath = 'users/userdata';

@Component
export default class HelloWorld extends Vue {
  private user_id: string = ""
  private name: string = ""
  private email: string = ""
  private dept: string = ""
  private position: string = ""
  private formdata = {}
  private state: string="loading"
  private errorMsg: string="Error"
  private points: number = 20
  private storeData = {}
  private submitted: boolean = false
  private calcpoints: number = 0
  private firebaseData= null

  public firestore() {
    return {
      firebaseData: db.doc(docPath),
    };
  }

  public async saveUser() {
      await db.doc(docPath).set(
        this.formdata).then(
          docRef => {
        this.state = 'synced';
        this.storeData = this.formdata;

        this.submitted = true;

        const newObj = this.formdata
        const arr: any[] = [];
        Object.values(newObj).forEach(function(value) {
          if (value != '') {
            arr.push(value);
          }
        });
        const values = arr.length;
        const calculatedPoints = values*this.points;
        this.calcpoints = calculatedPoints;
        })
        
        .catch(error => {
        console.error('Error adding details: ', error)
        this.state = 'error';
    })
  }

  public async prevData() {
    const docRef = db.doc(docPath);
    let data = (await docRef.get()).data();
    if(!data){
      data = { user_id: '', name: '', email: '', dept: '', position: ''}
      docRef.set(data)
    }
    this.formdata = data;
    this.storeData = { ...data };
    this.state = 'synced';

    const newObj = this.formdata
    const arr: any[] = [];
    Object.values(newObj).forEach(function(value) {
      if (value != '') {
        arr.push(value);
      }
    });
    const values = arr.length;
    const calculatedPoints = values*this.points;
  }

  /*public debounce<F extends (...params: any[]) => void>(fn: F, delay: number) {
  let timeoutID: number = 1000;
  return function(this: any, ...args: any[]) {
    this.storeData = this.formdata;
    this.saveUser;
    clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
    } as F;
  }*/

  public debouncedChange = debounce(
    this.saveUser
    , 2000);

  public async autosave() {
    await db.doc(docPath).set(this.formdata).then(
          docRef => {
        this.state = 'autosaved';
        this.storeData = this.formdata;
    })
  }

  public dataUpdate() {
    this.state = 'autosaved';
    setTimeout(this.autosave, 2000)
  }

  public backToOriginal(){
    this.state = 'revoked';
    this.formdata = { ...this.storeData}
  }

  public close() {
    this.submitted = false;
    this.state = 'synced';
  }

  created() {
    this.prevData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>