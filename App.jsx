import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('voice');
  const [expenses, setExpenses] = useState([]);

  const addExpense = (amount, description, category) => {
    const newExpense = {
      id: Date.now(),
      amount,
      description,
      category,
      timestamp: new Date().toISOString()
    };
    setExpenses(prev => [newExpense, ...prev]);
  };

  const VoiceTab = () => (
    <div style={{
      padding: '20px',
      border: '2px dashed #e2e8f0',
      borderRadius: '12px',
      textAlign: 'center',
      background: 'white'
    }}>
      <h3>语音记账功能</h3>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>
        点击按钮模拟语音记账
      </p >
      <button
        onClick={() => addExpense('50.00', '午餐消费', '餐饮')}
        style={{
          padding: '12px 24px',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        模拟语音记账
      </button>
      <div style={{ marginTop: '15px', fontSize: '14px', color: '#6b7280' }}>
        💡 完整版本将支持真实语音识别
      </div>
    </div>
  );

  const OCRTab = () => (
    <div style={{
      padding: '20px',
      border: '2px dashed #e2e8f0',
      borderRadius: '12px',
      textAlign: 'center',
      background: 'white'
    }}>
      <h3>OCR识别功能</h3>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>
        点击按钮模拟OCR识别
      </p >
      <button
        onClick={() => {
          addExpense('68.00', '咖啡厅消费', '餐饮');
          addExpense('25.50', '午餐费用', '餐饮');
          addExpense('15.00', '交通费', '交通');
        }}
        style={{
          padding: '12px 24px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        模拟OCR识别
      </button>
      <div style={{ marginTop: '15px', fontSize: '14px', color: '#6b7280' }}>
        💡 完整版本将支持真实图片识别
      </div>
    </div>
  );

  const totalExpenses = expenses.reduce((sum, expense) => 
    sum + parseFloat(expense.amount || 0), 0
  );

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px 20px',
        borderRadius: '16px'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          🎉 智能财务助手
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          语音记账 + OCR识别 - 基础演示版
        </p >
      </header>

      <nav style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
        marginBottom: '30px',
        background: 'white',
        padding: '8px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <button 
          onClick={() => setActiveTab('voice')}
          style={{
            padding: '12px 16px',
            border: 'none',
            background: activeTab === 'voice' ? '#10b981' : 'none',
            color: activeTab === 'voice' ? 'white' : '#6b7280',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          语音记账
        </button>
        <button 
          onClick={() => setActiveTab('ocr')}
          style={{
            padding: '12px 16px',
            border: 'none',
            background: activeTab === 'ocr' ? '#10b981' : 'none',
            color: activeTab === 'ocr' ? 'white' : '#6b7280',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          OCR识别
        </button>
        <button 
          onClick={() => setActiveTab('overview')}
          style={{
            padding: '12px 16px',
            border: 'none',
            background: activeTab === 'overview' ? '#10b981' : 'none',
            color: activeTab === 'overview' ? 'white' : '#6b7280',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          消费概览
        </button>
      </nav>

      <main>
        {activeTab === 'voice' && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ color: '#1f2937', marginBottom: '8px', fontSize: '24px' }}>语音记账</h2>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>模拟语音记账功能</p >
            <VoiceTab />
          </div>
        )}
        
        {activeTab === 'ocr' && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ color: '#1f2937', marginBottom: '8px', fontSize: '24px' }}>OCR识别</h2>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>模拟OCR识别功能</p >
            <OCRTab />
          </div>
        )}
        
        {activeTab === 'overview' && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ color: '#1f2937', marginBottom: '24px', fontSize: '24px' }}>消费概览</h2>
            
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '24px',
              borderRadius: '12px',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <h3>总支出</h3>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>¥{totalExpenses.toFixed(2)}</div>
              <p style={{ fontSize: '12px', opacity: 0.8 }}>累计消费</p >
            </div>

            <div>
              <h3 style={{ marginBottom: '16px', color: '#374151' }}>消费记录</h3>
              {expenses.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  color: '#9ca3af'
                }}>
                  <p>暂无消费记录</p >
                  <p style={{ fontSize: '14px', marginTop: '8px' }}>使用语音记账或OCR识别添加消费记录</p >
                </div>
              ) : (
                expenses.map(expense => (
                  <div key={expense.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    marginBottom: '8px'
                  }}>
                    <div>
                      <div style={{ fontWeight: '500', color: '#1f2937' }}>{expense.description}</div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>{expense.category}</div>
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '18px' }}>
                      ¥{expense.amount}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;