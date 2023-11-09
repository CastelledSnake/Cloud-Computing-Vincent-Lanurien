const express = require('express');
const si = require('systeminformation');
const app = express();
const port = 4242;

async function getAllInfos() {
  try {
    const [
      cpu,
      system,
      mem,
      os,
      currentLoad,
      processes,
      diskLayout,
      networkInterfaces,
    ] = await Promise.all([
      si.cpu(),
      si.system(),
      si.mem(),
      si.osInfo(),
      si.currentLoad(),
      si.processes(),
      si.diskLayout(),
      si.networkInterfaces(),
    ]);

    const systemInfos = {
      cpu,
      system,
      mem,
      os,
      currentLoad,
      processes,
      diskLayout,
      networkInterfaces,
    };

    return systemInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations système.");
  }
}

// Définit une route qui renvoie les informations système.
app.get('/api/v1/sysinfo', async (req, res) => {
  try {
    const allInfos = await getAllInfos();
    res.json(allInfos);
  } catch (err) {
  console.error(err);
  res.status(500).json({ error: err.message });
  }
});

async function getCPUInfos() {
  try {
    const cpuInfos = await si.cpu();
    return cpuInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur le CPU.");
  }
}

async function getSystemInfos() {
  try {
    const sysInfos = await si.system();
    return sysInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur le système.");
  }
}

async function getMemInfos() {
  try {
    const memInfos = await si.mem();
    return memInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur la mémoire.");
  }
}

async function getOSInfos() {
  try {
    const osInfos = await si.osInfo();
    return osInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur le SE.");
  }
}

async function getCurrentLoadInfos() {
  try {
    const currentLoadInfos = await si.currentLoad();
    return currentLoadInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur la charge actuelle.");
  }
}

async function getProcessesInfos() {
  try {
    const processesInfos = await si.processes();
    return processesInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur les processus.");
  }
}

async function getDiskLayoutInfos() {
  try {
    const diskLayoutInfos = await si.diskLayout();
    return diskLayoutInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur l'agencement des disques.");
  }
}

async function getNetworkInterfacesInfos() {
  try {
    const networkInterfaceInfos = await si.networkInterfaces();
    return networkInterfaceInfos;
  } catch (err) {
    throw new Error("Une erreur s'est produite lors de la lecture des informations sur l'interface réseau.");
  }
}



app.get('/api/v1/sysinfo/cpu', async (req, res) => {
  try {
    const cpuInfos = await getCPUInfos();
    res.json(cpuInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/sysinfo/system', async (req, res) => {
  try {
    const sysInfos = await getSystemInfos();
    res.json(sysInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/sysinfo/mem', async (req, res) => {
  try {
    const memInfos = await getMemInfos();
    res.json(memInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/sysinfo/osInfo', async (req, res) => {
  try {
    const osInfos = await getOSInfos();
    res.json(osInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/sysinfo/currentLoad', async (req, res) => {
  try {
    const currentLoadInfos = await getCurrentLoadInfos();
    res.json(currentLoadInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/sysinfo/processes', async (req, res) => {
  try {
    const processesInfos = await getProcessesInfos();
    res.json(processesInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/sysinfo/diskLayout', async (req, res) => {
  try {
    const diskLayoutInfos = await getDiskLayoutInfos();
    res.json(diskLayoutInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/sysinfo/networkInterfaces', async (req, res) => {
  try {
    const networkInterfacesInfos = await getNetworkInterfacesInfos();
    res.json(networkInterfacesInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.all("*", (req, res) => {
  console.log("L'adresse URL que vous entrâtes est invalide");
  res.sendStatus("404");
});

app.listen(port, () => {
  console.log("Le serveur écoute sur le port ${port}");
});
module.exports = app;