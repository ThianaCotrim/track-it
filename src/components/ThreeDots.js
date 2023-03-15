import { ThreeDots } from "react-loader-spinner";

export default function Loader (){
    return (
        <ThreeDots 
        height="88"
        width="88"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        
        />
    )
}