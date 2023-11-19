import { LoaderArgs } from "@remix-run/node"

export const loader = async (loaderInput: LoaderArgs) => {

    const pathname = loaderInput.params["*"];
    const result = await import(`../app/json/${pathname}.json`); 

    
    return result;
}

export default function () {


    return <div>Whatever</div>
}