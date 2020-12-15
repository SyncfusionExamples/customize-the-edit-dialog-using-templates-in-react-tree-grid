import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Page, Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './datasource';
import DialogFormTemplate from './dialogTemplate';
import './App.css';
function App() {
  const editOptions: any = {  allowAdding: true, allowEditing: true, 
                              allowDeleting: true,
                              mode:"Dialog",
                              template: dialogTemplate
                            };
  const toolbarSettings: any = ["Add", "Edit", "Delete", "Update", "Cancel"];
  function dialogTemplate(props: any){
    return(<DialogFormTemplate {...props} />);
  }
  return (
    <TreeGridComponent dataSource={summaryData}
                       childMapping="subtasks"
                       treeColumnIndex={1}
                       editSettings={editOptions}
                       toolbar={toolbarSettings}
                       allowPaging={true}>
      <Inject services={[Page, Edit, Toolbar]} />                   
      <ColumnsDirective>
        <ColumnDirective field="taskID" headerText="Task ID" 
                         width='90' textAlign="Right" 
                         isPrimaryKey={true}>
        </ColumnDirective>
        <ColumnDirective field="taskName" headerText="Task Name">
        </ColumnDirective>
        <ColumnDirective field="startDate" headerText="Start Date"
                         format="yMd" type="date">
        </ColumnDirective>
        <ColumnDirective field="priority" headerText="Priority"
                         editType="dropdownedit">
        </ColumnDirective>
      </ColumnsDirective>
    </TreeGridComponent>
  );
}

export default App;
