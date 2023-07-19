# Parking Management (Infraestructure)

## Manifests

**Technologie:** Rancher Desktop

### Apply manifest in pod

```bash
    kubectl apply -f mysql-deployment.yaml
```

### Apply manifest in pod

```bash
    kubectl apply -f file-name.yaml
```

### List all pods

```bash
    kubectl get pods -A
```

### View logs in pod

```bash
    kubectl logs -n namespace -f podname
```

### Open pod

```bash
    kubectl exec -it -n namespace name -- bash
```

### List pod in namespace

```bash
    kubectl get deploy -n namespace
```

### Delete pod

```bash
    kubectl delete deploy -n namespace podname
```
