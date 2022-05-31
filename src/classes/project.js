import { getZapp, turingDate, getNewID } from "../modules/helpers";
import { user } from "../db/user";
import { toolR } from "../enums/tools";

export class Project {
  date;
  turingDate;
  title;
  type;
  client;
  tools;
  image;
  links;
  children;
  filter;
  id;

  constructor(date, title, type, client, tools, image, links = [], children, filter = []) {
    this.date = date;
    this.turingDate = turingDate(date);
    this.title = title;
    this.type = type;
    this.client = client;
    this.tools = tools ? tools.sort((a, b) => a - b).map(i => toolR[i]) : [];
    this.image = image;
    this.links = links;
    this.children = children;
    this.filter = filter;
    this.id = getNewID(client, date);
  }
}
export class Group {
  date;
  title;
  turingDate;
  client;
  tools;
  image;
  children;
  filter;
  id;
  description;
  list;
  position;

  constructor(date, client, tools, image, children, filter = [], description, position) {
    this.date = date;
    this.title = client;
    this.turingDate = turingDate(date);
    this.client = client;
    this.tools = tools ? tools.sort((a, b) => a - b).map(i => toolR[i]) : [];
    this.image = image;
    this.children = children;
    this.filter = filter;
    this.id = getNewID(client, date);
    this.description = `canvas.section.map.modal.${description}.position`;
    this.list = `canvas.section.map.modal.${description}.summary`;
    this.position = position
  }
}

export class Position {
  lat;
  lng;

  constructor(x, y) {
    this.lat = x;
    this.lng = y;
  }
}

export class Preview {
  src;

  constructor(image) {
    this.src = getZapp(`img/preview/wide/${image}.webp`);
  }
}

export class Document {
  id;
  baseUrl;
  text;
  path;

  constructor(doc = "", text = "Document") {
    this.id = doc;
    this.text = text;
    this.baseUrl = getZapp(`docs`);
    this.path = `${this.baseUrl}/${doc}.pdf`;
  }
}

export class Children {
  id;

  constructor(client, date) {
    this.id = getNewID(client, date);
  }
}

export class Link {
  baseUrl;
  params;
  text;
  path;

  constructor(baseUrl = "", text = "", param = "") {
    this.baseUrl = baseUrl;
    this.params = param;
    this.text = text;
    this.path = param !== '' ? `${baseUrl}?${param}` : baseUrl;
  }
}

export class LinkWeb {
  id;
  baseUrl;
  text;
  path;

  constructor(id = "", text = "") {
    this.id = id;
    this.text = text;
    this.baseUrl = `https://${user.media.github.production}.github.io`;
    this.path = `${this.baseUrl}/${id}`;
  }
}

export class LinkCodepen {
  id;
  baseUrl;
  text;
  path;

  constructor(id = "", text = "Codepen Prototype") {
    this.id = id;
    this.text = text;
    this.baseUrl = `https://codepen.io/${user.media.codepen.user}`;
    this.path = `${this.baseUrl}/pen/${id}`;
  }
}

export class LinkGithub {
  id;
  baseUrl;
  text;
  path;

  constructor(id = "", text = "Github") {
    this.id = id;
    this.text = text;
    this.baseUrl = `https://github.com/${user.media.github.production}`;
    this.path = `${this.baseUrl}/${id}`;
  }
}

export class LinkVimeo {
  id;
  baseUrl;
  text;
  path;

  constructor(id = "", text = "Vimeo") {
    this.id = id;
    this.text = text;
    this.baseUrl = `https://vimeo.com`;
    this.path = `${this.baseUrl}/${id}`;
  }
}
