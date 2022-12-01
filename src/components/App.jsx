import React, { Component } from 'react';
import * as API from 'services/api';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { MaterialEditorForm } from './MaterialEditorForm';
import { MaterialList } from './MaterialList';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error: true });
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, material],
      }));
      // console.log(material);
    } catch (error) {
      this.setState({ isLoading: false, error: true });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(prevState => ({
        materials: prevState.materials.filter(item => item.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async updateObj => {
    try {
      const updatedMaterials = await API.changeMaterial(updateObj);
      this.setState(prevState => ({
        materials: prevState.materials.map(item =>
          item.id === updateObj.id ? updatedMaterials : item
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { isLoading, materials, error } = this.state;

    return (
      <Layout>
        <GlobalStyle />
        {error && (
          <p>
            Уппс... :( что-то пошло не так, перезагрузите страницу и попробуйте
            ещё раз
          </p>
        )}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          <h2>Загружаем материалы</h2>
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </Layout>
    );
  }
}

export default App;
