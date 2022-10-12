import { Transform } from 'class-transformer';

export function TransformStringToDate(){

    return Transform(res => {
       
        if(res instanceof Date && !res){
            return res
        }
        const a = new Date(res.value.slice(0,10).split(/[-.\/]/));
        console.log(a)
        return a
    })
}