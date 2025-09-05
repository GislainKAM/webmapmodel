
export class Picto {
  title: string;
  description: string | undefined;
  imageUrl: string;

  constructor(title: string, description: string | undefined, imageUrl: string) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}