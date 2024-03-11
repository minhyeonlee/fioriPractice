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
            },
            onSearch: function(){
                let oComboBox = this.getView().byId("comboClass");
                let selectedKey = oComboBox.getSelectedKey();
                alert( selectedKey );
            },
            onSelectchange: function(oEvt ){
                alert( oEvt.getSource().getSelectedKey() );
            },
            onItem: function(oEvent){
                alert( oEvent.getParameter("listItem").getTitle() );
            }
        });
    });
