import { Component, OnInit } from '@angular/core';
import { Client } from '../components/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients!: Client[];
  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data.map((e) => {
        return {
          id: e.payload.doc.id,
        } as Client;
      });
    });
  }
  create(client: Client) {
    this.clientService.createClient(client);
  }

  update(client: Client) {
    this.clientService.updateClient(client);
  }

  delete(id: string) {
    this.clientService.deleteClient(id);
  }
}
