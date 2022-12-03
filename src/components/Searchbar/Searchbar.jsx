import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';
import { StyledForm, Button, StyledField } from './Searchbar.styled';

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     this.setState({
//       query: e.currentTarget.value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const query = e.currentTarget.elements.query.value;
//     if (query === '') {
//       toast('Please, enter your request');
//     }
//     this.props.onSubmit(query);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ query: '' });
//   };

//   render() {
//     const { query } = this.state;

//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">
//               <FcSearch />
//               Search
//             </span>
//           </button>

//           <input
//             className="input"
//             name="query"
//             value={query}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

export const Searchbar = ({ onSubmit }) => {
  const schema = yup.object({
    query: yup.string().required(() => toast('Please, enter your request')),
  });

  const handleSubmit = async (values, actions) => {
    await onSubmit(values.query);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Box as="header" p={6} bg={'primary'} mb={5}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Button type="submit" disabled={isSubmitting}>
              <span>
                <FcSearch size={20} />
              </span>
            </Button>

            <StyledField
              name="query"
              type="text"
              autoComplete="off"
              placeholder="Search images and photos"
            />
          </StyledForm>
        )}
      </Formik>
    </Box>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
