import * as React from 'react'

const intl = {
  formatMessage: (desc: any) => desc,
}

export function FormattedMessage(props: {
  id?: string
  defaultMessage: string
  description?: string
  children?: any
}): React.JSX.Element {
  return (
    <span>
      {props.id} - {JSON.stringify(props.defaultMessage)} - {props.description}{' '}
      - {props.children('fooo')}
    </span>
  )
}

function defineMessage(any: any): any {
  return any
}
export const msg: any = defineMessage({
  defaultMessage: 'defineMessage',
  description: 'foo',
})

export const Component = (): React.ReactElement => {
  return (
    <FormattedMessage defaultMessage="test message">
      {(chunks: any) => chunks}
    </FormattedMessage>
  )
}

export const formattedMessage: any = intl.formatMessage({
  defaultMessage: 'formatMessage',
  description: 'foo',
})
