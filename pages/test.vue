<template>
  <div>
    <div>
      <v-btn @click="addData">データの追加</v-btn>
    </div>
    <div>
      <v-btn @click="getData">データの取得</v-btn>
    </div>
    <div>
      <v-btn @click="signup">ユーザ登録</v-btn>
    </div>
    <div>
      <v-btn @click="login">ユーザログイン</v-btn>
    </div>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
export default {
  data() {
    return {
      id: '001',
      title: 'テスト',
      email: 'keigen2015@gmail',
      password: 'banarsbaseball',
      tests: [],
    }
  },
  methods: {
    // firebaseにデータを追加する
    async addData() {
      try {
        const db = getFirestore(this.$firebase)
        const test = await addDoc(collection(db, 'test'), {
          id: this.id,
          titie: this.title,
        })
        console.log('追加したID：', test.id, '追加したタイトル：', test.title)
      } catch (e) {
        console.log(e)
      }
    },
    // firebaseからデータを取得する
    async getData() {
      try {
        const db = getFirestore(this.$firebase)
        const querySnapshot = await getDocs(collection(db, 'test'))
        querySnapshot.forEach((doc) => {
          this.tests.push(doc.data())
          console.log(doc.id)
          console.log(doc.data())
        })
      } catch (e) {
        console.log(e)
      }
    },
    // Authenticationに登録する
    signup() {
      const auth = getAuth(this.$firebase)
      createUserWithEmailAndPassword(auth, this.email, this.password).then(
        (userCredential) => {
          console.log(userCredential.user)
          console.log('ユーザ登録OK')
        }
      )
    },
    // Authenticationを使用して登録しているユーザでログインする
    login() {
      const auth = getAuth(this.$firebase)
      signInWithEmailAndPassword(auth, this.email, this.password).then(
        (userCredential) => {
          console.log(userCredential.user)
          console.log('ユーザログインOK')
        }
      )
    },
  },
}
</script>

<style></style>
