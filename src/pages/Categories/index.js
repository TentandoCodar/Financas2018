import React, {useEffect, useState} from 'react';


import {Container} from 'reactstrap';
import Header from '../../Components/Header';
import {CategoriesContainer, CategoryContainer, Data, Title,Actions, EditModal, EditContent, EditInput,
  DeleteModal, Button, CreateContent,CreateInput
} from './styles';
import api from '../../services/api';
export default function Categories({history}) {

  const [width,setWidth] = useState();
  const [categories, setCategories] = useState([]);
  const [editModal,setEditModal] = useState(false);
  const [deleteModal,setDeleteModal] = useState(false);
  const [originalEditValue, setOriginalEditValue] = useState('');
  const [editId, setEditId] = useState();
  const [createCategory, setCreateCategory] = useState(false);
  const [createValue,setCreateValue] = useState('');
  const [err,setErr] = useState(false);
  
  const [editValue,setEditValue] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    
    window.onresize = () => {
        setWidth(window.innerWidth);
    }
    getCategories();
  },[])

  async function getCategories() {
    await api.post('/Category/Index').then((resp) => {
        setCategories(resp.data);
        
    }).catch((err) => {

    })
  }
  async function handleEdit(id,name) {
    api.post('/Category/Update', {id,name}).then((resp) => {
      getCategories()
    }).catch((err) => {
      error()
    })
  }
  async function handleDelete(id) {
    api.post('/Category/Delete', {id: id}).then((resp) => {
      getCategories()
    }).catch((err) => {
      error()
    });
  }

  async function handleCreate() {
    api.post('/CreateCategory', {name:createValue}).then((resp) => {
      getCategories()
      setCreateCategory(false)
      setCreateValue('');
    }).catch((err) => {
      error()
    });
  }

  function error() {
    setErr(true);
    setTimeout(() => {
      setErr(false);
    },2000)
  }
  

  return (
    <Container>
        <Header width={width}></Header>
        <Title>Categorias</Title>
        <Button onClick={() => {setCreateCategory(true); setEditModal(false); setDeleteModal(false)}}>Nova Categoria</Button>
        <CategoriesContainer>
          {categories.map(category => (
            <CategoryContainer key={category.id}>
              <Data   >{category.name}</Data>
              <Actions onClick={() => {
                setEditModal(true);
                setDeleteModal(false);
                setCreateCategory(false);
                setEditValue(category.name);
                setOriginalEditValue(category.name);
                setEditId(category.id);
                
                }}>Editar</Actions>
              <Actions onClick={() => {
                setEditModal(false);
                setDeleteModal(true);
                setCreateCategory(false);
                setEditValue(category.name);
                setOriginalEditValue(category.name);
                setEditId(category.id);
                
                }}>Deletar</Actions>
            </CategoryContainer>
          ))}
        </CategoriesContainer>

        {editModal && <EditModal>
          <h4>Editar a categoria: {originalEditValue}</h4>
          <EditContent>
            <p>Nome:</p>
            <EditInput placeholder="Edite a categoria aqui" value={editValue} onChange={(e) => setEditValue(e.target.value)}></EditInput>
          </EditContent>
          <Button onClick={() => {handleEdit(editId,editValue)}}>Editar</Button><br></br>
          <Button onClick={() => {setEditModal(false)}}>Fechar modal</Button>
        </EditModal>}
        {deleteModal && 
          <DeleteModal>
            <p>Deseja realmente remover a categoria {editValue}</p>
            <Button onClick={() => {handleDelete(editId)}}>Deletar</Button><br></br>
          <Button onClick={() => {setDeleteModal(false)}}>Fechar modal</Button>
          </DeleteModal>
        
        }
        {
          createCategory && <CreateContent>
            <p>Criar categoria</p>
            <CreateInput placeholder="Crie uma nova categoria" value={createValue} onChange={(e) => setCreateValue(e.target.value)}></CreateInput>
            <Button onClick={() => {handleCreate()}}>Criar</Button><br></br>
            <Button onClick={() => {setCreateCategory(false)}}>Fechar modal</Button>
          </CreateContent>

        }
        {err && <p>Forneça os dados corretamente</p>}
    </Container>
  );
}
