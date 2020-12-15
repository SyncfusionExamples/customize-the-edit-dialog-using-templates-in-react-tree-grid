import React from 'react';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DataUtil } from '@syncfusion/ej2-data';
import { summaryData } from './datasource';
const DialogFormTemplate: React.FC = (props:any) => {
    const PriorityData: any = DataUtil.distinct(summaryData, 'priority', true);
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <TextBoxComponent id="taskID" name="taskID" value={props.taskID}
                            placeholder="Task ID" floatLabelType="Always" enabled={props.isAdd}></TextBoxComponent>
                        </td>
                        <td>
                            <TextBoxComponent id="taskName" name="taskName" value={props.taskName}
                            placeholder="Task Name" floatLabelType="Always"></TextBoxComponent>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <DatePickerComponent id="startDate" name="startDate" value={props.startDate}
                            placeholder="Start Date" floatLabelType="Always"></DatePickerComponent>
                        </td>
                        <td>
                            <NumericTextBoxComponent id="progress" name="progress" value={props.progress}
                            placeholder="Progress" floatLabelType="Always"></NumericTextBoxComponent>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <DropDownListComponent id="priority" name="priority" value={props.priority}
                            placeholder="Priority" floatLabelType="Always"
                            dataSource={PriorityData} fields={{text:"priority", value:"priority"}}></DropDownListComponent>
                        </td>
                        <td>
                            <CheckBoxComponent id="approved" name="approved" checked={props.approved}
                            label="Approved" labelPosition="Before"></CheckBoxComponent>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DialogFormTemplate;