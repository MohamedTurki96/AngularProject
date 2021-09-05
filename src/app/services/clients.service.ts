import { Injectable } from '@angular/core';
import { Client } from 'src/app/components/components/client.model';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  constructor(private firestore: AngularFirestore) {}
  getClients() {
    return this.firestore.collection('clients').snapshotChanges();
  }
  createClient(client: Client) {
    return this.firestore.collection('clients').add(client);
  }
  
  deleteClient(clientId: string) {
    this.firestore.doc('clients/' + clientId).delete();
  }
  updateClient(client: Client) {
    this.firestore.doc('clients/' + client.id).update(client);
  }
}
