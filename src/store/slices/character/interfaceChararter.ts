export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    episode: string[];
    created: Date;
  }
  
  export interface ICharacterState {
    characters: ICharacter[];
    filteredCharacters: ICharacter[]
    isLoading: boolean;
    isError: string | null;
  }