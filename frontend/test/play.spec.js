import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import Play from '../src/components/play/Play'

describe('<Play />', () => {
    it('has initial state hasFinished with value false ', () => {
        const wrapper = mount(<Play />)
        expect(wrapper.state().hasFinished).to.be.false
    })

    it('calls componentDidMount', () => {
        sinon.spy(Play.prototype, 'componentDidMount')
        mount(<Play />)
        expect(Play.prototype.componentDidMount).to.have.property('callCount', 1)
        Play.prototype.componentDidMount.restore()
    })
})