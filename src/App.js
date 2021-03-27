import Layout from './components/Layout/Layout';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo';
import './App.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const todos = [
  { id: 1, text: 'Выучить Реакт', completed: false },
  { id: 2, text: 'Выучить роуты', completed: false },
  { id: 3, text: 'Выучить Редакс', completed: false },
  { id: 4, text: 'Сделать проект', completed: false },
];

const App = () => (
  <Layout>
    {/* <Counter />
    <ColorPicker options={colorPickerOptions} /> */}
    <Todo todos={todos} />
  </Layout>
);

export default App;
