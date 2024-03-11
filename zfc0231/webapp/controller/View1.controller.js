sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0231.controller.View1", {
            onInit: function () {
                let oData = {
                    skillName: "SAPUI5"
                };
                let oModel = new JSONModel( oData );
                this.getView().setModel( oModel );
            },
            onDefault: function() {
                let oData = {
                    lastName: "Lee"
                };
                let oModel = new JSONModel( oData );
                this.getView().setModel( oModel , "empInfo" );
            },
            onGet: function(){
                // let oView = this.getView();
                // let oModel = oView.getModel();
                // let oData = oModel.getData();
                // alert( oData.lastName );
                let oView = this.getView();
                let oModel = oView.getModel( "empInfo" ); //empInfo Model
                let oData = oModel.getData();
                alert( oData.lastName );
            }
        });
    });
