import { init } from "next/dist/compiled/webpack/webpack";

var admin = require("firebase-admin");

var serviceAccount = require("./firebaseAdmin.json");

class FirebaseDB {
    private connection: any;
    init() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://frontiers-test-94016-default-rtdb.firebaseio.com"
        });
    }
    constructor() {
        if(admin.apps.length === 0) {
            this.init();
        }
        this.connection = admin.database();
    }
    getConnection() {
        return this.connection;
    }
    
}

class Singleton {
    private static instance: FirebaseDB
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new FirebaseDB();
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
  }
  
  module.exports = Singleton;