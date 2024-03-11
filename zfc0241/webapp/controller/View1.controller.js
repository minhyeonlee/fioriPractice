sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0241.controller.View1", {
            onInit: function () {
                let oData = {
                    classList:[
                        { class: "400001", cName: "SYNC 1"},
                        { class: "400004", cName: "SYNC 4"}
                    ],
                    stdList: [
                        { stdNo: "24040001", sName: "Kang" },
                        { stdNo: "24040002", sName: "Lee"}
                    ]
                };
                let oModel = new JSONModel( oData );
                this.getView().setModel( oModel );

                // Second Model
                let oData2 = {
                    classList:[
                        { key: "400001", text: "SYNC 1"},
                        { key: "400004", text: "SYNC 4"}
                    ],
                    stdList: [
                        { key: "24040001", text: "Kang" },
                        { key: "24040002", text: "Lee"}
                    ]
                };
                // Data만 선언하고 Model은 재활용
                //oModel.setData( oData2 );
                let oModel2 = new JSONModel();
                oModel2.setData( oData2) ;
                this.getView().setModel( oModel2, "2nd" );
                
            },
            onSearch: function(){
                let oComboBox = this.getView().byId("comboClass");
                let selectedKey = oComboBox.getSelectedKey();
                alert( selectedKey );
            },
            onSelectchange: function( oEvt ){
                // alert( oEvt.getSource().getSelectedKey() );
                // // let bindingContext = oEvt.getSource().getBindingContext();
                let oBindingContext = oEvt.getParameter("selectedItem").getBindingContext();
                alert( oBindingContext ); // 객체정보

                let sPath = oBindingContext().getPath();
                alert( sPath ); // path
            },
            onItem: function(oEvent){
                alert( oEvent.getParameter("listItem").getTitle() );
            },
            onStd: function(){
                let oList = this.getView().byId("list2nd");
                let sPath = "2nd>/stdList"
                oList.bindElement(sPath);
            },
            onClass: function(){
                let oList = this.getView().byId("list2nd");
                let sPath = "2nd>/classList"
                oList.bindElement(sPath);
            }
        });
    });
