import { storiesOf } from '@storybook/vue'
import { CHeading, CText, CStack, CBox, CFlex, CIcon } from '..'

storiesOf('UI | Stack', module)
  .add('With vertical stack', () => ({
    components: { CHeading, CText, CStack, CBox },
    template: `
      <div>
        <CStack spacing="8">
          <CBox p="5" shadow="md" border-width="1px">
            <CHeading font-size="xl">Plan Money</CHeading>
            <CText mt="4">The future can be even brighter but a goal without a plan is just a wish</CText>
          </CBox>
          <CBox p="5" shadow="md" border-width="1px">
            <CHeading font-size="xl">Save Money</CHeading>
            <CText mt="4">You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process</CText>
          </CBox>
        </CStack>
      </div>
    `
  }))
  .add('With horizontal stack', () => ({
    components: { CHeading, CText, CStack, CBox },
    template: `
      <div>
        <CStack is-inline spacing="8">
          <CBox p="5" shadow="md" border-width="1px">
            <CHeading font-size="xl">Plan Money</CHeading>
            <CText mt="4">The future can be even brighter but a goal without a plan is just a wish</CText>
          </CBox>
          <CBox p="5" shadow="md" border-width="1px">
            <CHeading font-size="xl">Save Money</CHeading>
            <CText mt="4">You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process</CText>
          </CBox>
        </CStack>
      </div>
    `
  }))
  .add('Nesting Flex in stack', () => ({
    components: { CHeading, CText, CStack, CBox, CFlex, CIcon },
    template: `
      <div>
        <c-stack is-inline spacing="3">
          <c-flex align-items="center">
            <c-icon mr="3" name="sun" />
            <c-text>Kitchener, ON, Canada</c-text>
          </c-flex>
          <c-flex align-items="center">
            <c-icon mr="3" name="sun" />
            <c-text>Kitchener, ON, Canada</c-text>
          </c-flex>
        </c-stack>
      </div>
    `
  }))
