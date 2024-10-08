// ciclos de pagamentos
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader"
import TabContent from '../common/tab/tabContent'

//import { selectTab, showTabs } from '../common/tab/tabActions'
import { init, create, update, remove } from "./billingCycleActions";


import BillingCycleList from "./billingCycleList";
import BillingCycleForm from "./billingCycleForm";

class BillingCycle extends Component {

    // entrar na tab List por padrão
    componentWillMount() {
        //this.props.selectTab('tabList')
        //this.props.showTabs('tabList', 'tabCreate')
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon="bars" target="tabList"/>
                            <TabHeader label='Incluir' icon="plus" target="tabCreate"/>
                            <TabHeader label='Alterar' icon="pencil" target="tabUpdate"/>
                            <TabHeader label='Excluir' icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BillingCycleList></BillingCycleList>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BillingCycleForm 
                                    onSubmit={this.props.create} 
                                    submitLabel='Incluir'
                                    submitClass='primary'                                    
                                />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm 
                                    onSubmit={this.props.update} 
                                    submitLabel='Alterar'
                                    submitClass='info'
                                />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <BillingCycleForm 
                                    onSubmit={this.props.remove} 
                                    readOnly={true}
                                    submitLabel='Excluir'
                                    submitClass='danger'
                                />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}


//const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)