# app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # Clientes
    path('clientes/', views.listar_clientes, name='listar_clientes'),
    path('clientes/<int:pk>/', views.detalhes_cliente, name='detalhes_cliente'),
    path('clientes/criar/', views.criar_cliente, name='criar_cliente'),
    path('clientes/<int:pk>/editar/', views.editar_cliente, name='editar_cliente'),
    path('clientes/<int:pk>/excluir/', views.excluir_cliente, name='excluir_cliente'),

    # Fornecedores
    path('fornecedores/', views.listar_fornecedores, name='listar_fornecedores'),
    path('fornecedores/<int:pk>/', views.detalhes_fornecedor, name='detalhes_fornecedor'),
    path('fornecedores/criar/', views.criar_fornecedor, name='criar_fornecedor'),
    path('fornecedores/<int:pk>/editar/', views.editar_fornecedor, name='editar_fornecedor'),
    path('fornecedores/<int:pk>/excluir/', views.excluir_fornecedor, name='excluir_fornecedor'),
]
