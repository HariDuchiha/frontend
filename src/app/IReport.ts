
import {transactionObj} from "./ITransaction";
export interface report{

    reportDetailsList: Array<
        {
            reportId: number,
            transaction: Array<transactionObj>,
            reportType: any,
            createdDate: number,
            startDate: number,
            endDate: number
        }
    >

}