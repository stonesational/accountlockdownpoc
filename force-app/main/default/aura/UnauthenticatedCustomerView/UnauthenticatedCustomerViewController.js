({
    doInit : function(component, event, helper) {
        var pageRef = component.get("v.pageReference");
        if(pageRef){
            component.set("v.customerId", pageRef.state.c__customerId);
        }
        
    }
})
