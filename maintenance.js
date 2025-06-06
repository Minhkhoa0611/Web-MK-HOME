(function() {
    var maintenanceUrl = "/maintenance.html";
    if (!window.location.pathname.endsWith("maintenance.html")) {
        window.location.href = maintenanceUrl;
    }
})();
