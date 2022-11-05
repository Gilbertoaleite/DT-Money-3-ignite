import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm(){

    function Hello (evt: any){
        
        evt.preventDefault();
        window.alert('Hello world!');
    }

    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transação"  />
            <button onClick={Hello}>
                <MagnifyingGlass/>Buscar</button>
        </SearchFormContainer>
    )
}