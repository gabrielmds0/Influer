import React from 'react';
import './Pricing.css'

export default function Pricing() {
  return (
    <section className="pricing" id='pricing'>
    <div className="gradient-overlay"></div>
    <div className='card-container'>
      <div className='card-1'>
        <div className='card-type'>Basic</div>
        <h1 className='card-price'>R$50</h1>
        <h3 className='month'>Mês</h3>
        <div className="list">
          <div className="list-item">
            <i className="fa-solid fa-check">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-check">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
        </div>
        <button type='button' className='card-btn'>Compre Agora</button>
        <div className='card-bottom'>Junte-se Agora!</div>
      </div>

      <div className='card-2'>
      <div className='card-type'>Pro</div>
        <h1 className='card-price'>R$80</h1>
        <h3 className='month'>Mês</h3>
        <div className="list">
          <div className="list-item">
            <i className="fa-solid fa-check">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-check">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
        </div>
        <button type='button' className='card-btn'>Compre Agora</button>
        <div className='card-bottom'>Junte-se Agora!</div>
      </div>

      <div className='card-3'>
      <div className='card-type'>Premium</div>
        <h1 className='card-price'>R$100</h1>
        <h3 className='month'>Mês</h3>
        <div className="list">
          <div className="list-item">
            <i className="fa-solid fa-check">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-check">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
          <div className="list-item">
            <i className="fa-solid fa-xmark">
              <span>Lorem impsum dolor sit.</span>
            </i>
          </div>
        </div>
        <button type='button' className='card-btn'>Compre Agora</button>

        <div className='card-bottom'>Junte-se Agora!</div>

      </div>
    </div>
    </section>
  );
}