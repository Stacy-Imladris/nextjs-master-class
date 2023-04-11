import { instance, instanceRick } from "./instances";
import { RickAndMortyApi } from "./rick-and-morty-api";
import { NextJsApi } from "./next-js-api";

const rickAndMortyApi = new RickAndMortyApi(instanceRick);
const nextJsApi = new NextJsApi(instance);

export const API = {
  rickAndMorty: rickAndMortyApi,
  nextJs: nextJsApi,
};
