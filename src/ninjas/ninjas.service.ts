import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/createNinjaDto';
import { UpdateNinjaDto } from './dto/updateNinjaDto';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 1,
      name: 'Ninja 1',
      clan: 'Clan 1',
    },
    {
      id: 2,
      name: 'Ninja 2',
      clan: 'Clan 1',
    },
    {
      id: 3,
      name: 'Ninja 3',
      clan: 'Clan 2',
    },
    {
      id: 4,
      name: 'Ninja 4',
      clan: 'Clan 2',
    },
    {
      id: 5,
      name: 'Ninja 5',
      clan: 'Clan 3',
    },
  ];

  getNinjas(clan: string) {
    if (clan && clan.trim() !== '') {
      return this.ninjas.filter((ninja) => ninja.clan === clan);
    }

    return this.ninjas;
  }

  getNinja(id: string) {
    return this.ninjas.find((ninja) => ninja.id === +id);
  }

  createNinja(ninja: CreateNinjaDto) {
    const newNinja = { id: this.ninjas.length + 1, ...ninja };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: string, ninja: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((n) => {
      if (n.id === +id) {
        return { ...n, ...ninja };
      }
      return n;
    });

    return this.getNinja(id);
  }

  deleteNinja(id: string) {
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== +id);
    return {
      id,
      message: 'Ninja deleted',
    };
  }
}
