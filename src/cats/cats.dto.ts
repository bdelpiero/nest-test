// DTO is an object that defines how the data will be sent over the network
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {
  name?: string;
  age?: number;
  breed?: string;
}

export class ListAllEntities {
  limit?: number;
}
