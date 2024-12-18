# Fornecedor Views
def listar_fornecedores(request):
    fornecedores = Fornecedor.objects.all()
    return render(request, 'fornecedores/listar_fornecedores.html', {'fornecedores': fornecedores})

def detalhes_fornecedor(request, pk):
    fornecedor = get_object_or_404(Fornecedor, pk=pk)
    return render(request, 'fornecedores/detalhes_fornecedor.html', {'fornecedor': fornecedor})

def criar_fornecedor(request):
    if request.method == 'POST':
        form = FornecedorForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('listar_fornecedores')
    else:
        form = FornecedorForm()
    return render(request, 'fornecedores/criar_fornecedor.html', {'form': form})

def editar_fornecedor(request, pk):
    fornecedor = get_object_or_404(Fornecedor, pk=pk)
    if request.method == 'POST':
        form = FornecedorForm(request.POST, instance=fornecedor)
        if form.is_valid():
            form.save()
            return redirect('listar_fornecedores')
    else:
        form = FornecedorForm(instance=fornecedor)
    return render(request, 'fornecedores/editar_fornecedor.html', {'form': form})

def excluir_fornecedor(request, pk):
    fornecedor = get_object_or_404(Fornecedor, pk=pk)
    if request.method == 'POST':
        fornecedor.delete()
        return redirect('listar_fornecedores')
    return render(request, 'fornecedores/excluir_fornecedor.html', {'fornecedor': fornecedor})