sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0250.controller.View1", {
            onInit: function () {
                let oData = {
                    classList:[
                        {   class: "400001", cName: "Sync 1",
                            stdList:[
                                {   stdNo: "24040001", sName:"Lee1" },
                                {   stdNo: "24040002", sName:"Seo1" }

                         ]},
                        {   class: "400004", cName: "Sync 4",
                            stdList:[
                                {   stdNo: "24040041", sName:"Kang4" },
                                {   stdNo: "24040042", sName:"Han4" }
                            ] }
                    ]
                };
                let oModel = new JSONModel();
                oModel.setData( oData );
                this.getView().setModel( oModel );
            },
            onSelectChange: function( oEvent ){
                let sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
                alert( sPath );
                let oListItem = this.getView().byId("listInfo");
                oListItem.bindElement( sPath );
            }

        });
    });
