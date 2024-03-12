sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/base/util/ObjectPath"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, ObjectPath) {
        "use strict";

        return Controller.extend("sync04.zfc0250.controller.View1", {

            onInit: function () {
                let oData = {
                    classList:[
                        {   class: "400001", cName: "Sync 1",
                            stdList:[
                                {   stdNo: "24040001", sName:"Lee1", genderCode:"2", gender:"Female" },
                                {   stdNo: "24040002", sName:"Seo1", genderCode:"1", gender:"Male" }

                         ]},
                        {   class: "400004", cName: "Sync 4",
                            stdList:[
                                {   stdNo: "24040041", sName:"Kang4", genderCode:"1", gender:"Male" },
                                {   stdNo: "24040042", sName:"Han4", genderCode:"2", gender:"Female"  }
                            ] }
                    ]
                };
                let oModel = new JSONModel();
                oModel.setData( oData );
                this.getView().setModel( oModel );

            },
            onSelectChange: function( oEvent ){
                // let sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
                // let oListItem = this.getview().byId("searchBtn");
                // oListItem.bindElement( btnPath );

            },
            onSearch: function () {
                let sPath = this.getView().byId("comboClass").getSelectedItem().getBindingContext().getPath();
                let oListItem = this.getView().byId("listInfo");
                oListItem.bindElement( sPath );
                
                //detail info clear
                let oDetailItem = this.getView().byId("stdInfo"); 
                oDetailItem.bindElement("clear"); 
                oDetailItem.setExpanded(false);
            },
            onListPress: function( oEvent ){
                let sPath = oEvent.getParameter("listItem").getBindingContextPath();
                let oDetailItem = this.getView().byId("stdInfo"); 
                oDetailItem.bindElement( sPath );   
                oDetailItem.setExpanded(true);         
                //oListItem.setProperty("expanded", true);
            }


        });
    });
