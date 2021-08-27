import dynamic from 'next/dynamic'
import { useState } from 'react';

const Modal = dynamic(() =>
  import('../../components/Modal').then(mod => mod.Modal),
  {
    // eslint-disable-next-line react/display-name
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);// ele importa o componente somente quando solicitado no btn..laze no react
export default function Calculo() {
  const [modalVisible, setModalVisible] = useState(false);
  
    function handleModalVisible() {
    setModalVisible(true);
  }
  async function handleSum() {
      const calc = (await import('../../libs/calc')).default;
      // importa a lib por demanda

    alert(calc.sum(5, 6));
  }

  return (
    <div>
      <h1>Calculo</h1>
      <button onClick={() => { handleSum(); handleModalVisible() }}>Somar</button>

      {modalVisible && <Modal />}
    </div>
  );
}