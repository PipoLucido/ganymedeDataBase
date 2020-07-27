import Server from './connections/connectServer';
import database from './connections/connectDataBase';
const app = new Server();

database();
app.runServer();