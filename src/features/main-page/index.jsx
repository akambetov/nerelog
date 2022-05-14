import React, { useState } from 'react'

import ScreenLayout from '../../components/screen-layout'
import Card from '../../components/card'
import { Flex } from '../../components/flex'
import { List } from '../../components/list'

export default () => {
    const [flexDirection, setFlexDirection] = useState(window.innerWidth < 720 ? 'column' : 'row')

    window.addEventListener('resize', () => {
        setFlexDirection(window.innerWidth < 720 ? 'column' : 'row')
    })

    return (
        <ScreenLayout>
            <ScreenLayout.Header title="Header" />
            <ScreenLayout.Content>
                <h1>Content</h1>
                <Flex direction={flexDirection}>
                    <List>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                        <Card>
                            <Card.Title title="card title" />
                            <Card.Content content="card conasssss ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent ssssssssstent " />
                        </Card>
                    </List>
                    <div>
                        <p>
                            Cupidatat aute aliqua velit commodo est deserunt quis minim in aute.
                            Veniam occaecat amet ullamco laboris in incididunt reprehenderit id ut.
                            Commodo aliqua ullamco ex ea velit qui aute tempor fugiat aliquip velit.
                            Sint culpa et enim nulla proident ipsum quis aute nostrud dolore. Labore
                            magna eiusmod officia nisi labore non aute commodo excepteur et laboris
                            laborum ullamco laborum. Adipisicing deserunt minim esse consectetur
                            incididunt amet exercitation anim ea. Reprehenderit aliqua qui sint
                            fugiat Lorem non cupidatat sit eiusmod ullamco in.
                        </p>
                        <p>
                            Cupidatat aute aliqua velit commodo est deserunt quis minim in aute.
                            Veniam occaecat amet ullamco laboris in incididunt reprehenderit id ut.
                            Commodo aliqua ullamco ex ea velit qui aute tempor fugiat aliquip velit.
                            Sint culpa et enim nulla proident ipsum quis aute nostrud dolore. Labore
                            magna eiusmod officia nisi labore non aute commodo excepteur et laboris
                            laborum ullamco laborum. Adipisicing deserunt minim esse consectetur
                            incididunt amet exercitation anim ea. Reprehenderit aliqua qui sint
                            fugiat Lorem non cupidatat sit eiusmod ullamco in.
                        </p>
                        <p>
                            Cupidatat aute aliqua velit commodo est deserunt quis minim in aute.
                            Veniam occaecat amet ullamco laboris in incididunt reprehenderit id ut.
                            Commodo aliqua ullamco ex ea velit qui aute tempor fugiat aliquip velit.
                            Sint culpa et enim nulla proident ipsum quis aute nostrud dolore. Labore
                            magna eiusmod officia nisi labore non aute commodo excepteur et laboris
                            laborum ullamco laborum. Adipisicing deserunt minim esse consectetur
                            incididunt amet exercitation anim ea. Reprehenderit aliqua qui sint
                            fugiat Lorem non cupidatat sit eiusmod ullamco in.
                        </p>
                        <p>
                            Cupidatat aute aliqua velit commodo est deserunt quis minim in aute.
                            Veniam occaecat amet ullamco laboris in incididunt reprehenderit id ut.
                            Commodo aliqua ullamco ex ea velit qui aute tempor fugiat aliquip velit.
                            Sint culpa et enim nulla proident ipsum quis aute nostrud dolore. Labore
                            magna eiusmod officia nisi labore non aute commodo excepteur et laboris
                            laborum ullamco laborum. Adipisicing deserunt minim esse consectetur
                            incididunt amet exercitation anim ea. Reprehenderit aliqua qui sint
                            fugiat Lorem non cupidatat sit eiusmod ullamco in.
                        </p>
                        <p>
                            Cupidatat aute aliqua velit commodo est deserunt quis minim in aute.
                            Veniam occaecat amet ullamco laboris in incididunt reprehenderit id ut.
                            Commodo aliqua ullamco ex ea velit qui aute tempor fugiat aliquip velit.
                            Sint culpa et enim nulla proident ipsum quis aute nostrud dolore. Labore
                            magna eiusmod officia nisi labore non aute commodo excepteur et laboris
                            laborum ullamco laborum. Adipisicing deserunt minim esse consectetur
                            incididunt amet exercitation anim ea. Reprehenderit aliqua qui sint
                            fugiat Lorem non cupidatat sit eiusmod ullamco in.
                        </p>
                        <p>
                            Cupidatat aute aliqua velit commodo est deserunt quis minim in aute.
                            Veniam occaecat amet ullamco laboris in incididunt reprehenderit id ut.
                            Commodo aliqua ullamco ex ea velit qui aute tempor fugiat aliquip velit.
                            Sint culpa et enim nulla proident ipsum quis aute nostrud dolore. Labore
                            magna eiusmod officia nisi labore non aute commodo excepteur et laboris
                            laborum ullamco laborum. Adipisicing deserunt minim esse consectetur
                            incididunt amet exercitation anim ea. Reprehenderit aliqua qui sint
                            fugiat Lorem non cupidatat sit eiusmod ullamco in.
                        </p>
                    </div>
                </Flex>
            </ScreenLayout.Content>
            <ScreenLayout.Footer>
                <h1>Footer</h1>
            </ScreenLayout.Footer>
        </ScreenLayout>
    )
}
