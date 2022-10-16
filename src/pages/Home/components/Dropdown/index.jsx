import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import './styles.css';

export default function Dropdown() {
  const options = [
    {
      id: 0,
      value: 'Administração',
    },
    {
      id: 1,
      value: 'Estoque',
    },
    {
      id: 2,
      value: 'Vendas',
    },
  ];
  const [sector, setSector] = useState('Selecione uma ocupação');
  const [isOpen, setIsOpen] = useState(false);

  const onSelectOption = option => {
    setSector(option.value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-container"
        onClick={() => setIsOpen(prev => !prev)}>
        <p>{sector}</p>
        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options.map(option => (
            <p
              className="item"
              key={option.id}
              onClick={() => onSelectOption(option)}>
              {option.value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
