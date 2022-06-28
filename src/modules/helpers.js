export const nano = "nn-";

export const getID = (client, date) => {
  client = client.replace(/[\s./]/g, "").toLowerCase();
  date = date.replace(/\//g, "");
  return `${client}_${date}`;
}

export const getNewID = (client, date) => {
  client = client.replace(/[\s./]/g, "").toLowerCase();
  date = date.replace(/\//g, "");
  return `${date}_${client}`;
}

export const spinalCase = (label) => {
  return label
    .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
    .replace(/&/g, 'and')
    .trim()
    .replace(/[ ]{1,}/g, "-")
    .toLowerCase();
}

export const pascalCase = (label) => {
  return label
    .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
    .replace(/&/g, 'and')
    .trim()
    .replace(/[ ]{1,}/g, "");
}

export const titleCase = (label) => {
  return label
    .replace(/_/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, word => {
      return word.toUpperCase();
    })
    .trim()
    .replace(/-/g, " ");
}

export const hexToDec = (number) => {
  return parseInt(number, 16);
}

export const decToHex = (number) => {
  return (number).toString(16);
}

export const dateToNumber = (date) => {
  return parseInt(date.split("/").join(""));
}

export const rad = Math.PI / 180;

export const deg = 180 / Math.PI;

export const getZapp = (path) => {
  return `https://miguel-rivas.github.io/zapp/${path}`;
}

const audio = new Audio(getZapp(`audio/click.mp3`));
export const playSound = () => {
  audio.play();
}