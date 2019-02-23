export class AmexioDateUtils{

    isDateEqual(d1: any, d2:any){
        const date1 = new Date(d1.getTime());
        const date2 = new Date(d2.getTime());

        if(date1.getTime() === date2.getTime()){
            return true;
        }
        else  if ((date1.getMonth() === date2.getMonth()) && (date1.getDate() === date2.getDate())){
            return true;
        }

        return false;
    }

    isDateGreaterThenEqualTO(d1: any, d2:any){
        const date1 = new Date(d1.getTime());
        const date2 = new Date(d2.getTime());

        if(date1.getTime() >= date2.getTime()){
            return true;
        }
        

        return false;
    }

}