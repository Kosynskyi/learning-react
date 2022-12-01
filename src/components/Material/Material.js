import React, { Component } from 'react';
import { EditMaterialModal } from 'components/EditMaterialModal';

export class Material extends Component {
  state = {
    isOpenModal: false,
  };

  //   toggleModal = () => {
  //     this.setState(prevState => ({
  //       isOpenModal: !prevState.isOpenModal,
  //     }));
  //   };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isOpenModal } = this.state;

    return (
      <div>
        <p>
          <b>Название:</b> {item.title}
        </p>
        <p>
          <b>Ссылка:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Удалить
        </button>
        <button
          type="button"
          onClick={this.openModal}
          // onClick={() => onUpdate({ ...item, title: Date.now() })}
        >
          Редактировать
        </button>

        {isOpenModal && (
          <EditMaterialModal
            closeModal={this.closeModal}
            onEdit={() => onUpdate({ ...item, title: Date.now() })}
          />
        )}

        <hr />
      </div>
    );
  }
}
