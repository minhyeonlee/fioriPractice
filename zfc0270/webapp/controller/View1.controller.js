sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0270.controller.View1", {
            onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData( "../model/data.json" ); //webapp으로 위치를 옮겨서 model-data.json을 찾아라
                this.getView().setModel( oModel );
            },
            onClick: function (oEvent) {
                // let sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
                let oContext = oEvent.getSource().getBindingContext(); // == oEvent.getParameter("listItem").getBindingContext().getPath();
                let sPath = oContext.getPath();
                // alert( sPath );
                this.getView().byId("connection").bindElement( sPath );
            }
        });
    });
