
def process(s):
    s.replace(u".mo Monoid.∙",u"∙")
    result = re.sub(u"Measured.∥ .m ∥ (\.{0,1}\w+?)", u"∥ \1 ∥", s)
    print result
def main():
    process(u''' .mo Monoid.∙ measure-digit {.a} {.A} {.V} {{.mo}} {{.m}} pr)
    --  ((.mo Monoid.∙
    --    (.mo Monoid.∙ .s)
    --    ((.mo Monoid.∙ Measured.∥ .m ∥ e)
    --     ((.mo Monoid.∙ Measured.∥ .m ∥ d) (Measured.∥ .m ∥ c))))
    --   ((.mo Monoid.∙ ) (Measured.∥ .m ∥ a)))}''')

main()
