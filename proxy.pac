function FindProxyForURL(url, host) {
    var clientIP = myIpAddress();

    // Always bypass proxy for internal IP ranges
    if (
        isInNet(destIP, "10.0.0.0", "255.0.0.0") ||
        isInNet(destIP, "192.168.0.0", "255.255.0.0") ||
        isInNet(destIP, "172.16.0.0", "255.240.0.0")
    ) {
        return "DIRECT";
    }

    // Use proxy if on school LAN
    if (
        isInNet(clientIP, "10.55.66.0", "255.255.254.0") ||
        isInNet(clientIP, "10.130.16.0", "255.255.255.0") ||
        isInNet(clientIP, "10.130.191.0", "255.255.255.0") ||
        isInNet(clientIP, "10.130.123.0", "255.255.255.0") ||
        isInNet(clientIP, "10.143.32.0", "255.255.255.0") ||
        isInNet(clientIP, "10.130.126.0", "255.255.255.0") ||
        isInNet(clientIP, "10.100.37.0", "255.255.255.0") ||
        isInNet(clientIP, "10.130.103.0", "255.255.255.0")
    ) {
        return "PROXY proxy1.rmsafetynet.com:8080";
    }

    // Default to direct
    return "DIRECT";
}
