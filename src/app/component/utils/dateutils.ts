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

    public createDaysForMonths(selectedPeriod: any, currrentDate: any) : any[]{
        const calendaryData = [];
        const date = new Date(selectedPeriod.getFullYear(), selectedPeriod.getMonth(), 1, 0, 0, 0, 0); // Starting at the 1st of the month
        const extras = (date.getDay() + 6) % 7; // How many days of the last month do we need to include?
        date.setDate(date.getDate() - extras); // Skip back to the previous monday
        while (calendaryData.length < 6) {
            const rowDays = [];
            for (let i = 0; i < 7; i++) {
                const day: any = {
                    date: null, selected: false, isActivePeriod: null, isDisabled: false, isActive: false, isEvent: false, eventDetails: null,
                };
                day.date = new Date(date.getTime());
                day.isActivePeriod = (date.getMonth() === selectedPeriod.getMonth());
                day.isActive = this.isDateEqual(day.date, currrentDate);
               
                rowDays.push(day);
                date.setDate(date.getDate() + 1);
            }
            calendaryData.push(rowDays);
        }

        return calendaryData;
    }

}