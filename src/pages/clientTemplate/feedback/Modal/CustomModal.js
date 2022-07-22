/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable max-lines-per-function */
import { Button, Modal } from 'antd'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { useIntl } from 'react-intl'

const CustomModal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const intl = useIntl()

  useImperativeHandle(ref, () => ({
    showModal() {
      setVisible(true)
    },
  }))

  const onPopupClosed = () => {
    setVisible(false)
    props.closePopup(true)
  }

  return (
    <Modal
      title="Modal 1000px width"
      centered
      visible={visible}
      onOk={onPopupClosed}
      onCancel={() => setVisible(false)}
      bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}
      width={1000}
      footer={
        <div className="custom-footer-modal">
          <div className="left">
            <Button type="primary" danger>
              {intl.formatMessage({ id: 'modal.delete' })}
            </Button>
          </div>
          <div className="right">
            <Button onClick={onPopupClosed}>
              {intl.formatMessage({ id: 'modal.saveAndClose' })}
            </Button>
            <Button>{intl.formatMessage({ id: 'modal.saveAndCreate' })}</Button>
          </div>
        </div>
      }
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <div>
        Necessitatibus soluta aperiam tenetur corrupti pariatur? Et ea nulla perferendis sint illum,
        alias incidunt, similique debitis iure atque deserunt explicabo tempora quam eligendi
        perspiciatis minus architecto. Consectetur sint nesciunt reiciendis, veritatis eaque
        tenetur. Deleniti odit eum architecto eligendi fugiat, officia eveniet suscipit magni
        exercitationem soluta dicta nemo ad adipisci, quae voluptatem deserunt eaque temporibus sint
        reprehenderit nesciunt iste ab natus. Quae harum, iure aut quo magnam perferendis libero
        maiores recusandae consequuntur at nesciunt est iusto, necessitatibus sint alias quas natus!
        Perspiciatis est ut beatae facilis? Pariatur, unde commodi est, aliquid aperiam voluptatum
        nam ad sapiente in nostrum eaque quas? Est, nemo eum illo laudantium molestiae ullam in,
        eligendi deserunt perferendis numquam, itaque esse quis quae repellat! A, quasi, fuga
        impedit id veniam quia blanditiis repellendus deleniti ducimus similique magni maxime
        reiciendis quos maiores aut nisi? Odio quis magnam iure corporis, sint libero ex pariatur,
        ipsa quas praesentium aliquid explicabo dolores eligendi distinctio. Maiores porro fuga
        animi? Magnam et adipisci optio deleniti ipsa corporis? Ipsum corrupti mollitia vitae
        aperiam adipisci sed ducimus ratione itaque laudantium magnam quas atque excepturi suscipit
        iure autem ex ad odio quidem, consequatur in modi? Vel est eligendi dignissimos rerum esse
        officiis labore provident temporibus asperiores aliquid, officia sunt. Quo quod aspernatur
        accusamus animi adipisci velit consequuntur porro, facilis, assumenda, distinctio
        voluptates. Nobis cupiditate at sunt reprehenderit aperiam velit molestiae perspiciatis
        suscipit maxime, repellendus eligendi vero error assumenda?
      </div>
    </Modal>
  )
})

export default CustomModal
