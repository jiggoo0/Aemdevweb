#!/bin/bash
echo "📡 [HOME AI] Scanning Active Network Ports..."
# Find node/next processes and their ports
NETSTAT_OUT=$(netstat -tuln 2>/dev/null || ss -tuln 2>/dev/null)
NODE_PROCS=$(ps aux | grep -E "node|next-server" | grep -v grep)

if [ -z "$NODE_PROCS" ]; then
    echo "✅ No active Node.js servers found."
else
    echo "🔥 Active Node.js Processes:"
    ps aux | grep -E "node|next-server" | grep -v grep | awk '{print "PID: "$2" | CMD: "$11" "$12}'
    echo "------------------------------------------------"
    echo "💡 To kill a specific port, use: kill -9 <PID>"
    echo "💡 To clear all ports, use: pkill -f node"
fi
