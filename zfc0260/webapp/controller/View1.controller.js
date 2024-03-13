sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync.zfc0260.controller.View1", {
            onInit: function () {
                let oData = {
                    esClassSet: [
                        {
                            Class: "40001",
                            Cname: "SYNC 4기 1반"
                        },
                        {
                            Class: "40002",
                            Cname: "SYNC 4기 2반"
                        }
                    ]
                };
                let oModel = new JSONModel();
                oModel.setData( oData );
                this.getView().setModel( oModel );
            }
        });
    });
